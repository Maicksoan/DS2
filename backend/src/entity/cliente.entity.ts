import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { CidadeEntity } from "./cidade.entity";

@Entity({ name: 'cliente' })
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 6, nullable: false })
    codigo: string;

    @Column({ length: 50, nullable: false })
    nome: string;

    @Column({ length: 255, nullable: false })
    email: string;

    @ManyToOne(type => CidadeEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'cidade_id' })
    cidade: CidadeEntity;
}