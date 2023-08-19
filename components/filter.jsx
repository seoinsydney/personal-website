import styles from '@/styles/components.module.scss';
import Checkbox from './checkbox';

export default function Filters({categories}) {
    return (
        <div>
            {
                categories.map(category => 
                    <>
                    <Checkbox key={category.id} label={category.label} id={category.id}/>
                    </>
                    )
            }
        </div>
    )
}