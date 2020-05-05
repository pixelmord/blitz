import {useEffect, useState} from 'react'

export const Console = () => {
  const [output, setOutput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/commands/new?id=${'random-id'}`)
      const json = await res.json()
      setOutput(json.output)
    }

    fetchData()
  }, [])

  return (
    <div className="px-4 py-5 mt-5 overflow-auto font-mono text-sm text-white bg-gray-900 rounded-lg shadow h-96 sm:p-6">
      {output.split('\n').map((line: string, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  )
}
