// Builds a Gmail "compose" URL pre-filled with the given recipient,
// so mail buttons open Gmail directly instead of the OS's default mail app.
export function getGmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
