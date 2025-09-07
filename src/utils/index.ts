export function getHoursHeaderFromDates(start: string, end: string): string[] {
	const startDate = new Date(
		Number(start.substring(0, 4)),
		Number(start.substring(4, 6)) - 1,
		Number(start.substring(6, 8)),
		Number(start.substring(8, 10)),
		Number(start.substring(10, 12)),
		Number(start.substring(12, 14)),
	);
	const endDate = new Date(
		Number(end.substring(0, 4)),
		Number(end.substring(4, 6)) - 1,
		Number(end.substring(6, 8)),
		Number(end.substring(8, 10)),
		Number(end.substring(10, 12)),
		Number(end.substring(12, 14)),
	);

	const hours: string[] = [];
	const current = new Date(startDate);
	while (current <= endDate) {
		hours.push(`${current.getHours().toString().padStart(2, "0")}:00`);
		current.setHours(current.getHours() + 1);
	}
	return hours;
}
