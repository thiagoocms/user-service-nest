import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}