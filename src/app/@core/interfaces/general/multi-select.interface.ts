export interface MultiSelect {
	items: { [key: string]: any }[];
	bindLabel: string;
	bindValue?: string;
	clearable?: boolean;
	multiple?: boolean;
	appendTo?: string;
	isCustomLabel?: boolean;
	isCustomOption?: boolean;
}
