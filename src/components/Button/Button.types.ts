export enum ButtonType {
	primary = 'primary',
	secondary = 'secondary',
	text = 'text',
}

export interface ButtonProps {
	label?: string;
	onClick?: () => void;
	type?: ButtonType;
}
