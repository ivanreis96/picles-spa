import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'

export function Shelter() {
    return (
        <Panel>
            <form className={styles.container} onSubmit={}>
                <Input label="Nome" value="" />
                <Button type="submit">Salvar dados</Button>
            </form>
        </Panel>
    )
}