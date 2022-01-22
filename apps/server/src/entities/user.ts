import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {IsEmail} from 'class-validator'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date

  @CreateDateColumn({name: 'updated_at'})
  updatedAt!: Date

  @Column({nullable: true})
  name?: string

  @Column('varchar', {length: 200, nullable: true})
  bio?: string

  @Column({name: 'photo_url', nullable: true})
  photoUrl?: string

  @Column({nullable: true})
  phone?: string

  @Column({unique: true, nullable: true})
  @IsEmail()
  email?: string

  @Column({nullable: true})
  password?: string

  @Column({name: 'github_id', nullable: true})
  githubID?: string

  @Column({name: 'google_id', nullable: true})
  googleID?: string

  @Column({name: 'facebook_id', nullable: true})
  facebookID?: string

  @Column({name: 'twitter_id', nullable: true})
  twitterID?: string
}
