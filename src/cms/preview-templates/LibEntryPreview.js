import React from 'react'
import PropTypes from 'prop-types'
import { LibEntryTemplate } from '../../templates/lib-entry'

const LibEntryPreview = ({ entry, widgetFor }) => (
  <LibEntryTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

LibEntryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LibEntryPreview
