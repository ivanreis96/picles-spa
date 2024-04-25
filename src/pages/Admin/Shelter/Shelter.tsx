import { useForm } from "react-hook-form";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";

const shelterSchema = z.object({
    name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres.').max(30, 'Nome deve ter no máximo 30 caracteres'),
    email: z.string().email('Campo deve ser um email.'),
    phone: z.string(),
    whatsApp: z.string(), 
})

type ShelterSchema = z.infer<typeof shelterSchema>

export function Shelter() {
    const { register, handleSubmit, formState } = useForm<ShelterSchema>({
        resolver: zodResolver(shelterSchema)
    })

    const registerWithMask = useHookFormMask(register)

    function submit({ name }: ShelterSchema) {
        console.log(name)
    }

    return (
        <Panel>
            <form className={styles.container} onSubmit={handleSubmit(submit)}>
                <div>
                    <Input label="Nome" {...register('name')} />
                    {
                        formState.errors?.name && (<p className={styles.formError}>{formState.errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input label="Email" {...register('email')}/>
                    {
                        formState.errors?.email && (<p className={styles.formError}>{formState.errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Input label="Telefone" {...register('phone')}/>
                    {
                        formState.errors?.phone && (<p className={styles.formError}>{formState.errors.phone.message}</p>
                    )}
                </div>
                <div>
                    <Input label="WhatsApp" {...register('whatsApp')}/>
                    {
                        formState.errors?.whatsApp && (<p className={styles.formError}>{formState.errors.whatsApp.message}</p>
                    )}
                </div>
                <Button type="submit">Salvar dados</Button>
            </form>
        </Panel>
    )
}