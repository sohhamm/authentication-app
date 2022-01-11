import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date

  @CreateDateColumn({name: 'updated_at'})
  updatedAt!: Date

  @Column()
  name!: string

  @Column('varchar', {length: 200})
  bio!: string

  @Column({name: 'photo_url'})
  photoUrl!: string

  @Column()
  phone!: number

  @Column({unique: true})
  email!: string

  @Column()
  password!: string
}
