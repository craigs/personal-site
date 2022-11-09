---
slug: joy-of-end-to-end-type-safety
title: The joy of end to end type safety
teaser: Type safety eliminiates whole categories of bugs. It also enriches the development experience.
createdAt: "2021-07-04"
updatedAt: "2021-07-04"
cover:
  src: /images/articles/how-to-ace-developer-technical-interviews/cover.jpg
  credit:
    attribution: Photo by
    author: Rich Tervet
    link: https://unsplash.com/@richtervet?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
---

# {% $markdoc.frontmatter.title %} {% #title %}

{% cover /%}

A common pattern for apps is to split our architectural concerns in half. Our back end services contain all the logic for our application while front end systems are devoid of any business logic.

The two halves communicate via an API layer.

In building large scale TypeScript applications, we have seen the benefits of types. They elevate our quality, eliminating whole categories of bugs. They enrich the development experience.

I want to show you an approach in which you can unlock the joys of end to end type safety with TypeScript and GraphQL.

To demonstrate end to end type safety, I have developed sample api and web applications in NextJS. The [API](https://github.com/craigs/e2e-type-safety/tree/main/api) is a simple GraphQL endpoint that retrieves users from GitHub's API.

The [web application](https://github.com/craigs/e2e-type-safety/tree/main/web) uses Apollo client to call our API and render the list of users on a page.
The repository is available at [https://github.com/craigs/e2e-type-safety](https://github.com/craigs/e2e-type-safety)

The GraphQL schema language is a typed language. As a front end developer, we really don't care that it can be implemented in any programming language. What we really care about is that the API is our source of truth for our data and consequently, our types.

As data changes in the API, we want to know about the changes. We want to be able to inspect the hierarchy and we want to be able to easily understand what it all means.
Let's start our [sample API server](https://github.com/craigs/e2e-type-safety/tree/main/api#readme).

Once you have followed the instructions and have your API server started, you will be able to access the API playground on <http://localhost:4000/api>

Being able to test your queries with access to the schema definitions and documentation as defined by the back end team is pure joy.

In this instance, I have my query and can use that in my front end application.

Our web application uses Apollo Client to talk to our GraphQL and is written in TypeScript. The back end development teams have crafted a beautiful API for us with all the types that we need. What we do not want, is to write or maintain our own copies. The API is our source of truth.

We want to just maintain our queries and mutations and automatically generate our TypeScript types and React hooks for Apollo Client.

First of all, let's take a look at the web application and see what it does.

With both the API and Web running, you will be able to see your application on <http://localhost:3000/>

If you take a look at [src/pages/index.tsx](https://github.com/craigs/e2e-type-safety/blob/main/web/src/pages/index.tsx#L10) you will see that it uses the useUsersQuery() custom hook. These are imported from [~graphql](https://github.com/craigs/e2e-type-safety/blob/main/web/src/pages/index.tsx#L5) located in [src/generated/graphql.ts](https://github.com/craigs/e2e-type-safety/blob/main/web/src/generated/graphql.ts#L69-L87). Just to be clear, we wrote the [Users.query.graphql](https://github.com/craigs/e2e-type-safety/blob/main/web/src/graphql/Users.query.graphql) file and then used a completely generated custom hook that used a generated User[] type all validated against our API. That is joyous!

So how were the types and custom React hooks generated?

The [graphql-codegen](https://github.com/dotansimha/graphql-code-generator) library validates our *.graphql queries and mutations using the endpoint in [codegen.yml](https://github.com/dotansimha/graphql-code-generator). It then generates all the required TypeScript types and creates React hooks for us. Just lovely.

Run [npm run codegen](https://github.com/craigs/e2e-type-safety/blob/main/web/package.json#L9) to see it in action.

We want to be hyper aware of is when the API changes. Codegen ensures that we are perfectly in sync with changes to the API. Our types will change and TypeScript will do what it does best and ensure that our front end application adheres to the new shape of data.

But we can do better than be notified at compile time. Linting can really bring a level of happiness to developers by informing you of the changes at design time.

In the sample app, I have a field called name, which I have deprecated in the API. The deprecation notice includes instructions to the developer. If you open Users.query.graphql, you will see that the name field is underlined with our nice helpful message displayed.

Likewise, if I try to add a field that does not exist, my linter will helpfully remind me to not be crazy. If you miss the message in your IDE, eslint will let you know about it in CI.

We want to be hyper aware of is when the API changes. Codegen ensures that we are perfectly in sync with changes to the API. Our types will change and TypeScript will do what it does best and ensure that our front end application adheres to the new shape of data.

But we can do better than be notified at compile time. Linting can really bring a level of happiness to developers by informing you of the changes at design time.

In the sample app, I have a field called name, which I have deprecated in the API. The deprecation notice includes instructions to the developer. If you open Users.query.graphql, you will see that the name field is underlined with our nice helpful message displayed.

Likewise, if I try to add a field that does not exist, my linter will helpfully remind me to not be crazy. If you miss the message in your IDE, eslint will let you know about it in CI.

With end to end type safety in operation, TypeScript features like autocomplete start to play a role in the development experience. Autocomplete will bring the shape of our data to our finger tips, it will let us know what is available and what you shouldn't use any more.

We can go a step further to look after developers by recommending plugins to their IDE that will help them develop in this environment. The key point here is to help bring the easiest, most helpful development ecosystem to your team's finger tips.

It is not uncommon for GraphQL to be difficult for established organisations to adopt. If you are using normal REST style endpoints, you cannot generate your types dynamically.

What is possible is importing your back end shared types library. You will have to be aware that this library is consumed by two parts of your ecosystem and that you may not want to leak internal back end types with front end applications.

There is nothing preventing the existence of multiple type libraries to overcome your specific design issues.

I do have a preference for regenerating types from my GraphQL, but if GraphQL is not an option, I'll take a shared type library any day.

The benefits of types are well understood. As teams and codebases evolve and grow, the arguments for TypeScript adoption begin to intensify. What is important is to consider the experience we deliver to our developers. Clean architectures with low cognitive friction pay handsome dividends. We want one source of truth for our types. We do not want to write code that we do not have to. We want feedback as we type, not after a long time in CI.

The goal of end to end type safety is to eliminate whole classes of bugs, embracing change and enhancing communication through teams. It's about bringing little moments of joy in the development experience so that our developers can focus on obsessing over bringing the best experience to our customers.
