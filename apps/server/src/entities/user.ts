import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {IsEmail, IsNotEmpty} from 'class-validator'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date

  @CreateDateColumn({name: 'updated_at'})
  updatedAt!: Date

  @Column({default: ''})
  name: string = ''

  @Column('varchar', {length: 200, default: ''})
  bio: string = ''

  @Column({name: 'photo_url', default: ''})
  photoUrl: string = ''

  @Column({default: ''})
  phone: string = ''

  @Column({unique: true})
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @Column()
  @IsNotEmpty()
  password!: string

  @Column({name: 'github_id'})
  githubID: string | null = null

  @Column({name: 'google_id'})
  googleID: string | null = null

  @Column({name: 'facebook_id'})
  facebookID: string | null = null

  @Column({name: 'twitter_id'})
  twitterID: string | null = null
}
