import Link from 'next/link'
import Image from 'next/image'

function RecipeCard({ recipe }) {
  const { title, slug, cookingTIme, thumbnail } = recipe.fields

    return (
        <div className='card'>
           <div className="featured">
               <Image 
                   src={'https:' + thumbnail.fields.file.url}
                   width={thumbnail.fields.file.details.image.width}
                   height={thumbnail.fields.file.details.image.height}
               />
           </div>
           <div className="content">
               <div className="info">
                   <h4>{ title }</h4>
                   <p>Takes approx { cookingTIme } mins to make</p>
               </div>
               <div className="actions">
                   <Link href={'/recipes/' + slug}><a>Cook This</a></Link>
               </div>
           </div>
        </div>
    )
}

export default RecipeCard
