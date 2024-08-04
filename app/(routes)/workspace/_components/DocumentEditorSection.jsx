import React, { useState } from 'react'
import DcoumentHeader from './DcoumentHeader'
import DocumentInfo from './DocumentInfo'
import RichDocumentEditor from './RichDocumentEditor'
import { Button } from '@/components/ui/button'
import { MessageCircle, X } from 'lucide-react'
import CommentBox from './CommentBox'

function DocumentEditorSection({ params }) {

  const [openComment, setOpenComment] = useState(false);
  return (
    <div className='relative'>
      {/* Header  */}
      <DcoumentHeader />

      {/* Document Info  */}
      <DocumentInfo params={params} />

      {/* Rich Text Editor  */}
      <div className='grid grid-cols-4'>
      <div className='col-span-3'>
        <RichDocumentEditor params={params} />
        </div>
      <div className='fixed right-10 bottom-10 '>
        <Button onClick={() => setOpenComment(!openComment)}>
          {openComment ? <X /> : <MessageCircle />} </Button>
        {openComment && <CommentBox />}
      </div>
    </div>
    </div>
  )
}

export default DocumentEditorSection