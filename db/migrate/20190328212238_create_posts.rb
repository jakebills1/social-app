class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :friend, foreign_key: true
      t.text :body

      t.timestamps
    end
  end
end
