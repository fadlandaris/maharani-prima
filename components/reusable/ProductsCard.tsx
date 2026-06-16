"use client"

import { useCallback } from 'react'
import Title from './Title'
import { GlobeIcon } from '@phosphor-icons/react'
import {
  ReactFlow,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeTypes,
  type ReactFlowInstance,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

type HardwareItem = {
  title: string
  desc: string
  img: string
}

// Layout matches Huawei FusionSolar microgrid diagram
// Row 0 (top):    ESS → PCS → SACU(top) → Booster → Power Grid
// Row 1 (bottom): PV  → Inv → SACU(bot) → Transformer → Load
// w-52 = 208px per node, 60px gap between columns
const NODE_POSITIONS: Array<{ x: number; y: number }> = [
  { x: 1072, y: 0   }, // 0 power grid
  { x: 804,  y: 0   }, // 1 Booster Station
  { x: 1072, y: 280 }, // 2 Load
  { x: 804,  y: 280 }, // 3 Transformer station
  { x: 536,  y: 0   }, // 4 Transformer station (SACU) — top
  { x: 536,  y: 280 }, // 5 Transformer station (SACU) — bottom
  { x: 268,  y: 280 }, // 6 Inverter
  { x: 268,  y: 0   }, // 7 PCS
  { x: 0,    y: 280 }, // 8 PV Modules
  { x: 0,    y: 0   }, // 9 Smart String Grid-Forming ESS
]

const BLUE   = { stroke: '#093eff', strokeWidth: 2 }
const YELLOW = { stroke: '#069c0c', strokeWidth: 2 }
const GREEN  = { stroke: '#d60d0a', strokeWidth: 1.5, strokeDasharray: '6 4' }

const EDGES: Edge[] = [
  { id: 'e9-7',  source: '9', target: '7', animated: true,  type: 'smoothstep', style: BLUE },
  { id: 'e7-4',  source: '7', target: '4', animated: true,  type: 'smoothstep', style: BLUE },
  { id: 'e8-6',  source: '8', target: '6', animated: true,  type: 'smoothstep', style: BLUE },
  { id: 'e6-5',  source: '6', target: '5', animated: true,  type: 'smoothstep', style: BLUE },
  { id: 'e4-5v', source: '4', sourceHandle: 'b', target: '5', targetHandle: 't', animated: false, type: 'straight', style: GREEN },
  { id: 'e4-1',  source: '4', target: '1', animated: true,  type: 'smoothstep', style: YELLOW },
  { id: 'e1-0',  source: '1', target: '0', animated: true,  type: 'smoothstep', style: YELLOW },
  { id: 'e5-3',  source: '5', target: '3', animated: true,  type: 'smoothstep', style: YELLOW },
  { id: 'e3-2',  source: '3', target: '2', animated: true,  type: 'smoothstep', style: YELLOW },
]

const HardwareNode = ({ data }: { data: HardwareItem }) => (
  <div className="bg-card overflow-hidden w-52 text-center ">
    <Handle type="target" position={Position.Left}   id="l" className="!opacity-0 !w-2 !h-2 !border-0" />
    <Handle type="source" position={Position.Right}  id="r" className="!opacity-0 !w-2 !h-2 !border-0" />
    <Handle type="source" position={Position.Bottom} id="b" className="!opacity-0 !w-2 !h-2 !border-0" />
    <Handle type="target" position={Position.Top}    id="t" className="!opacity-0 !w-2 !h-2 !border-0" />
    {/* {data.img ? ( */}
    <img src={'/hardware.png'} alt={data.title} className="w-full h-20 object-cover object-top " />
    <div className="p-2">
      <p className="text-[12px] font-medium text-foreground capitalize">
        {data.title}
      </p>
    </div>
  </div>
)

const nodeTypes: NodeTypes = { hardware: HardwareNode }

const ProductsCard = ({
  value,
  crumb,
  index,
  point,
  hardware,
  desc,
}: {
  value: string
  crumb: string
  index: number
  point: Array<{ title: string; desc: string[] }>
  hardware: HardwareItem[],
  desc: string
}) => {
  const nodes: Node[] = hardware.map((item, i) => ({
    id: String(i),
    type: 'hardware',
    position: NODE_POSITIONS[i] ?? { x: (i % 5) * 268, y: Math.floor(i / 5) * 280 },
    data: item,
  }))

  // fitView fires before the container has its final size — delay one frame
  const onInit = useCallback((rf: ReactFlowInstance) => {
    requestAnimationFrame(() => rf.fitView({ padding: 0.1 }))
  }, [])

  return (
    <div className='space-y-16'>
      <div className='space-y-4'>
        <Title value={value} crumb={`${crumb}`} />
        <p className='max-w-2xl'>{desc}</p>
      </div>
      <div className='h-[500px] bg-card overflow-hidden'>
        <ReactFlow
          nodes={nodes}
          edges={EDGES}
          nodeTypes={nodeTypes}
          onInit={onInit}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
        />
      </div>
      <div className='bg-card grid grid-cols-3'>
        {point.map((item, i) => (
          <div key={i} className={`${i === 0 ? '' : 'border-l border-muted/20'} p-8 space-y-12`}>
            <GlobeIcon weight='duotone' size={32} className='text-primary' />
            <div className='space-y-2'>
              <h4 className='text-foreground text-lg font-semibold'>{item.title}</h4>
              <ul className='space-y-1'>
                {item.desc.map((d, j) => (
                  <li key={j} className='text-foreground text-sm'>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsCard
