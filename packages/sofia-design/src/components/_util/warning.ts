export default function warning(condition: boolean, message: string) {
  if (import.meta.env.DEV && console) {
    if (condition) {
      console.error(`[@space/sofia-design]: ${message}`);
    }
  }
}
