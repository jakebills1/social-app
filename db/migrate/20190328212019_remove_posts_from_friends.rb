class RemovePostsFromFriends < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :posts, :text
  end
end
