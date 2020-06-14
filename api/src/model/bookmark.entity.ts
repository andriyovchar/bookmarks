import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity({name: 'bookmark'})
export class Bookmark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 300})
    name: string;

    @Column({type: 'varchar', length: 300})
    url: string;

    @Column({type: "int"})
    groupId: number;

}
