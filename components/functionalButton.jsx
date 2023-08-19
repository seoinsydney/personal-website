import styles from '@/styles/components.module.scss';

export default function PrimaryButton({ onClick, children, disabled }) {
  return (
    <div className={styles.functionalButton}>
        <button 
        disabled={disabled}
        onClick={onClick}
        // onClick={!disabled ? onClick : undefined} 
        type="button"
        >
        {children}
        </button>
    </div>
  )
}
