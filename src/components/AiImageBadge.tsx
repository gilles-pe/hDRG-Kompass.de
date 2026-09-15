type AiImageBadgeProps = {
  className?: string
}

function AiImageBadge({ className }: AiImageBadgeProps) {
  const classes = className ? `ai-image-badge ${className}` : 'ai-image-badge'
  return (
    <span className={classes}>
      KI-generiertes Bild
    </span>
  )
}

export default AiImageBadge
