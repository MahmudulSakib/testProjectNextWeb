export const protectedRoutesConfig = [
  { path: "/admin", requiredRoles: ["admin"] },
  { path: "/admin123", requiredRoles: ["admin"] },
  { path: "/admin345", requiredRoles: ["admin"] },
  { path: "/normalUser", requiredRoles: ["user", "admin"] },
  { path: "/normalUser123", requiredRoles: ["user", "admin"] },
  { path: "/normalUser345", requiredRoles: ["user", "admin"] },
];
/**
 * Checks if a given pathname (from request URL) matches a protected route.
 * @param pathname The path to check (e.g., "/admin/dashboard").
 * @returns An array of required roles if the path is protected, otherwise null.
 */
export function getRequiredRolesForPath(pathname: string): string[] | null {
  for (const config of protectedRoutesConfig) {
    const pattern = config.path
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\\\*/g, ".*");
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(pathname)) {
      return config.requiredRoles;
    }
  }
  return null;
}
