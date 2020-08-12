# Article

This is the model definition for an Article on GraphCMS

Field: coverImage
Type: reference, ContentImage

Field: title
Type: String, single line text
required

Field: teaser
Type: String, single line text
required

Field: slug
Type: String, single line text
unique, required

Field: category
Type: String, single line text

Field: contents
Type: reference, Content
required
