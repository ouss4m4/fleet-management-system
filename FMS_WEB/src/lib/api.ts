const BASE_URL = (import.meta.env.VITE_API_URL || '') + '/api/v1';

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  errors?: unknown;
  data?: T;
}

interface RequestOptions extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean>;
  body?: unknown;
}

export class APIError extends Error {
  status: number;
  body: unknown;
  constructor(status: number, body: unknown) {
    super(`API Error: ${status}`);
    this.status = status;
    this.body = body;
  }
}

function buildQueryString(
  params?: Record<string, string | number | boolean>
): string {
  if (!params) return '';
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    query.append(key, value.toString());
  });
  return `?${query.toString()}`;
}

export async function api<T>(
  method: HTTPMethod,
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, headers, body, ...rest } = options;
  const url = `${BASE_URL}${path}${buildQueryString(params)}`;

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  // await new Promise((res) => setTimeout(res, 2000)); // Simulate a delay

  const contentType = res.headers.get('Content-Type');
  const isJson = contentType?.includes('application/json');
  const json: ApiResponse<T> = isJson
    ? await res.json()
    : { success: false, error: await res.text() };

  if (!res.ok || !json.success) {
    throw new APIError(res.status, json.errors || json.message || json);
  }

  return json.data as T;
}
