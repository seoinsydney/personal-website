import styles from '@/styles/components.module.scss';
import { Link } from '@mui/material';

export default function PrimaryButton({ disabled, children, linkTo }) {

  return (
    <div className={styles.primaryButton}>
        <Link 
          href={linkTo} 
          >
          <button 
          disabled={disabled}
          type="button"
          >
            {children}
          </button>
        </Link>
    </div>
  )
}
