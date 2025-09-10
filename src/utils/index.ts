function parseEpgDate(dateStr: string): Date {
	return new Date(
		Number(dateStr.substring(0, 4)),
		Number(dateStr.substring(4, 6)) - 1,
		Number(dateStr.substring(6, 8)),
		Number(dateStr.substring(8, 10)),
		Number(dateStr.substring(10, 12)),
		Number(dateStr.substring(12, 14)),
	);
}

export function getHoursHeaderFromDates(start: string, end: string): string[] {
	const startDate = parseEpgDate(start);
	const endDate = parseEpgDate(end);

	const hours: string[] = [];
	const current = new Date(startDate);
	current.setHours(current.getHours() + 1);
	while (current <= endDate) {
		hours.push(`${current.getHours().toString().padStart(2, "0")}:00`);
		current.setHours(current.getHours() + 1);
	}
	return hours;
}
