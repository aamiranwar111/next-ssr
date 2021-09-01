// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
     <b>
      Pages:
      </b>
      {posts.Payload.pages.map((page) => (
        <li  key={page.slug} >{page.slug}</li>
      ))}
      <b>
      Categories:
      </b>
       {posts.Payload.categories.map((categorie) => (
        <li  key={categorie.id}>{categorie.en}</li>
      ))}
    </ul>

  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://services.nextaxe.com/api/setup?store_id=340')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog