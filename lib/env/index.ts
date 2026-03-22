
export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "production",
  ROKO_KERNEL_MODE: process.env.ROKO_KERNEL_MODE ?? "sovereign",
  ROKO_REALM_DEFAULT: process.env.ROKO_REALM_DEFAULT ?? "prime",
};
