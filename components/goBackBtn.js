import styles from '@/styles/button.module.scss';
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from 'next/router'

export default function GoBackBtn(){
    const router = useRouter()
    return(
        <div className={styles.goBack} >
            <button type="button" onClick={() => router.back()}>
            <TbArrowBackUp /> Go back
            </button>
        </div>
    )
} 