import {PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Entity} from 'typeorm';

@Entity({name: 'group'})
export class Group {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 300})
    name: string;

}
