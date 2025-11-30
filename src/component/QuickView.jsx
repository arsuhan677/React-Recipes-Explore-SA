import { useOutletContext, useNavigate } from 'react-router-dom'

export default function RecipeQuickView() {
  const { recipe } = useOutletContext() ?? {}
  const navigate = useNavigate()

  if (!recipe) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          aria-label="Close quick view"
          className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow hover:bg-white"
          onClick={() => navigate('..', { relative: 'path' })}
        >
          Close
        </button>
        <div className="h-56 w-full">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-wider text-emerald-500">
            Quick View
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {recipe.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{recipe.description}</p>
          <button
            type="button"
            onClick={() => navigate('..', { relative: 'path' })}
            className="mt-6 w-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            View full recipe
          </button>
        </div>
      </div>
    </div>
  )
}