import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
import { dayjs } from "@/lib/dayjs"
import { ArrowRight } from "lucide-react"
import { useRooms } from "@/http/use-rooms"

type GetRoomsAPIResponse = Array<{
    id: string
    name: string
    createdAt: string
    questionsCount: number
}>

export function RoomList() {
    const { data, isLoading } = useRooms()
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Salas recentes
                </CardTitle>
                <CardDescription>
                    Acesso rápido para as salas criadas recentemente
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {isLoading && <p className="text-muted-foreground text-sm">Carregando salas...</p>}
                {data?.map(room => {
                    return (
                        <Link key={room.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50" to={`/rooms/${room.id}`}>
                            <div className="flex flex-1 flex-col gap-1">
                                <h3 className="font-medium">{room.name}</h3>

                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">{room.questionsCount} Perguntas</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">{dayjs(room.createdAt).toNow()}</Badge>
                                </div>
                            </div>
                            <span className="flex items-center gap-1 text-sm">
                                Entrar<ArrowRight className="size-3" />
                            </span>
                        </Link>
                    )
                })}
            </CardContent>
        </Card>
    )
}