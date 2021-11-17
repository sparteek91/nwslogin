import { DatePipe } from "@angular/common";

export function rupee() {
	return { transform: (value: any) => value ? '₹' + value : 'NA' };
}

export function nullable() {
	return { transform: (value: any) => value ? value : 'NA' };
}

export function formatDate(format: string) {
    return { transform: (value: any) => value ? new DatePipe('en-US').transform(value, format) : 'NA' };
}

export function formatTime() {
    return { transform: (value: any) => value ? new DatePipe('en-US').transform(value, 'hh:mm:ss a') : 'NA' };
}