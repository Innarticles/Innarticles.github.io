---
layout: post
title: Adding Custom fields and methods to jsonapi resources
---
### The problem
Recently, I have attempted to completely switch to [www.jsonapi.org](JsonAPI) specification for all my API-only rails projects. 
To achieve these with ease, I use [www.github.com/cerebris/jsonapi-resources](Jsonapi resources gem). This gem is very handy to use and get's you configured for JsonAPI specs in to time. But sometimes, its not clear how to do what you would normally easily do if you are not using the tool. 
One of those issue is image uploads or adding more custom fields to the json objects from the ActiveRecords being serialized. I will show you my solution to the later challenge. 

### Solution 
Given a user model:
```ruby
# Table name: `users`
#
# ### Columns

# Name                          | Type               | Attributes
# ----------------------------- | ------------------ | ---------------------------
# **`id`**                      | `uuid`             | `not null, primary key`
# **`first_name`**              | `string`           |
# **`last_name`**               | `string`           |
...
class User < ActiveRecord::Base      
  def fullname
    self.first_name + " " +  self.last_name
  end
end
```
We are interested in showing a full_name as part of the returned json user object.
We can add the following snippet to user_resource.rb file
```ruby
# File: app/api/v1/resources/user_resource.rb
class Api::V1::UserResource < Api::V1::ApiResource
    begin
        attributes *User.attribute_names.map(&:to_sym) - %i[id]  + %i[full_name]   
    rescue
    end 
end
```
This way, we are sure of getting the full_name key as part of the returned json object.
