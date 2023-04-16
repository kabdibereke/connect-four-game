import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import playersIcon from '../../assets/playersIcon.svg'
import cn from 'classnames';


export const Button = ({ appearance, img = false, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.white]: appearance == 'white',
				[styles.yellow]: appearance == 'yellow',
                [styles.pink]: appearance == 'pink',
			})}
			{...props}
		>
			{children}
			{img && <img src={playersIcon} alt='icon'/>}
		</button>
	);
};
