require 'nokogiri'
require 'rubygems'
require 'open-uri'


url="http://www.simplyrecipes.com/recipes/classic_baked_acorn_squash/"
doc= Nokogiri::HTML(open(url))

@recipe_name=[]
@recipe_img=[]
@recipe_description=[]
@recipe_method=[]

@recipe_list=doc.css('.center a').map{|href| href ['href']}   

@recipe_name=doc.css(".center h1").text
@recipe_img= doc.css(".entry img").map{|href| href ['href']}
@recipe_description= doc.css("#recipe-intro").text
@recipe_method=doc.css("#recipe-callout")


recipe_category.each do |index|
 if index.present?
  puts index
  doc_2=Nokogiri::HTML(open(index))
 end
 end

