import Link from 'next/link'

function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className='card'>
           <div className="featured">
               {/* image thumb */}
           </div>
           <div className="content">
               <div className="info">
                   <h4>{ title }</h4>
                   <p>Take approx { cookingTime } mins to make</p>
               </div>
               <div className="actions">
                   <Link href={'/recipes/' + slug}><a>Cook This</a></Link>
               </div>
           </div>
        </div>
    )
}

export default RecipeCard
