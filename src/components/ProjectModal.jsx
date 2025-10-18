function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-8" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {project.content}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

