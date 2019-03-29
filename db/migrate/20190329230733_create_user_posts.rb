class CreateUserPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_posts do |t|
      t.text :body
      t.integer :likes
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end