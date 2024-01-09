import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #horarios = new Map()

    list(horario) {
        return this.#horarios.values()
    }

    create(horario) {
        const horarioId = randomUUID()

        this.#horarios.set(horarioId, horario)
    }

    update(id, horario) {
        this.#horarios.set(id, horario)
    }

    update(id) {
        this.#horarios.delete(id)
    }
}