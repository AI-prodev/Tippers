export const CancelIcon = ({
	size = '26',
	className
}: {
	size?: string;
	className?: string;
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
			<path d="M0 0H26V26H0V0Z" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0" transform="scale(0.00195312)" />
				</pattern>
				<image
					id="image0"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
};
