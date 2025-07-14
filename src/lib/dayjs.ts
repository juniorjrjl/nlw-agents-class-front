import dayjsLib from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-BR'

dayjsLib.locale('pt-BR')
dayjsLib.extend(relativeTime)

export const dayjs = dayjsLib