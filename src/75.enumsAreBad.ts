const loginMode = {
  device1: "device",
  email1: "email",
} as const;

type LoginMode = keyof typeof loginMode;

type loginmode3 = "social" | "email" | "device";
