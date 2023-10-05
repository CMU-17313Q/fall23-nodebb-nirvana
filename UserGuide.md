# User Guide

## Introduction

This guide explains how to use new features in NodeBB, including anonymous posting and private posts for instructors. It provides step-by-step instructions for users and covers automated testing to ensure reliability.

---

## How to Use the New Features

### Posting Anonymously

#### Logging In

Users need to log in to their NodeBB account.

#### Posting as Anonymous

When creating a new post or replying to a thread, there is an option to post anonymously. This option is a checkbox in the post creation interface.

#### Posting Content

Users can write their post or reply as they normally would but with the anonymity option enabled.

#### Submitting the Post

After composing the post, the user should click the "Submit" button to publish it anonymously.

#### After Submission

Users can edit the post’s anonymity by selecting the edit option on their post after posting.

#### Viewing the Post

The post is visible to the instructor with the user's name, while other students will see it as anonymous.

---

### Posting Privately for Instructors

#### Logging In

Users need to log in to their NodeBB account.

#### Posting Privately for Instructors

When creating a new post or replying to a thread, there is an option to post privately for instructors. This option is a checkbox in the post creation interface, labeled as "Post Privately"

#### Posting Content

Users can write their post or reply as they normally would, with the "Post Privately" option enabled.

#### Submitting the Post

After composing the post, the user should click the "Submit" button to publish it privately for instructors.

#### Viewing the Post

The post is visible to the instructor with the user's name associated with it. Other students or users will not have access to this post; it remains hidden from their view.

---

## Automated Testing

Automated testing is crucial for ensuring the reliability of these features. It helps catch errors and ensures that new code changes don't break existing functionality. Here are some automated tests our team has considered for our new features:

- **Unit Tests**: Write unit tests for individual functions or methods responsible for enabling anonymous posting and handling private messages. These tests should cover different scenarios, including edge cases.

  - [Automated Testing For backend support anonymization of post](test/posts.js): This test suite focuses on automating tests for the backend support of post anonymization, ensuring that user data is appropriately anonymized in posts [Lines: 34-36, 55-63, 71-73, 94-134].

  - [Automated Testing For Topic anonymization](test/topics.js): This test suite is designed to automate tests for anonymizing topics, verifying that topic-related data is anonymized as expected [Lines: 914-939 ] and [Categories](test/categories.js) [Lines: 84-114 ].

  - [Automated Testing For Avatar Template anonymization](test/template-helpers.js): This test suite is responsible for automating tests related to avatar template anonymization, ensuring that templates for avatars maintain privacy as required [Lines: 169-175 ].

  - [Automated Testing For Editing Name Visibility of a Post](test/posts.js): This suite automates tests that verify the visibility of user names when editing a post, ensuring that the appropriate name visibility rules are enforced [Lines: 600-673 ].

  - [Automated Testing For Private Post](test/topics.js): This test suite focuses on automating tests for private posts, checking that posts designated as private behave correctly in terms of visibility and access control [Lines: 114-127, 392-433].

  - [Automated Testing For User registration](test/user.js): This suite is responsible for automating tests related to user registration, ensuring that the user registration process functions correctly and user data is handled appropriately during registration [Lines: 28, 178-215].

- **Made Sure Existing Functionality**: Ensure that existing functionality (e.g., regular posting and messaging) is still working as expected after implementing these new features.

---

## Manual Testing by the Team

Manual testing was also conducted by all team members following the steps below to ensure full functionalit of previous version of NodeBB and the implementation of the new features. 

### Scenario-based Testing

#### For Anonymous Posting

**Instructors:**

1. Log in with their Instructor accounts.
2. Enable anonymous posting.
3. Create test posts.
4. Verify that student name is visible but hidden from public view.

**Students:**

1. Log in with their Student accounts.
2. Enable anonymous posting.
3. Create test posts.
4. Verify that their name is hidden from other students but visible to the instructor.

#### For Posting Privately for Instructors

**Instructors and Students:**

1. Log in with their respective accounts.
2. Enable the "Post Privately" option.
3. Create test posts.
4. Verify that these posts are visible to the instructor with the user's name.
5. Confirm that other students or users cannot access or view these private posts.

---
