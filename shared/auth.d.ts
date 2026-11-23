declare module '#auth-utils' {
  interface User { id: string; name: string; email: string; role: 'superadmin' | 'member'; sessionVersion: number }
}
export {}
