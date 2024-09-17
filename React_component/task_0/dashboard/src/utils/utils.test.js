import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
});
