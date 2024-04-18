import { useEffect } from "react";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css"
import { Card } from "../../components/common/Card";
import Skeleton from "react-loading-skeleton";

export function Pets(){
    useEffect( () => {

    }, [])
    return (
        
        <Grid>
            <div className={styles.container}>
                <Header />
                
                <main className={styles.list}>
                    <Skeleton count={5} containerClassName={styles.skeleton}/>
                    <Card href='/pets/1' text='nina' thumb="" />
                    <Card href='/pets/2' text='bob' thumb="" />
                    <Card href='/pets/3' text='jão' thumb="" />
                    <Card href='/pets/4' text='Tom' thumb="" />
                    <Card href='/pets/5' text='Jom' thumb="" />
                    <Card href='/pets/6' text='Lom' thumb="" />
                </main>
            </div>
        </Grid>
        
    )
}