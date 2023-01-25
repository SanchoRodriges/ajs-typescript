import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    remove(id: number): void {
        const cartId = this._items.findIndex(item => item.id == id);
        if (cartId !== -1) {
            this._items.splice(cartId, 1)
        }
    }

    cost(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    discountCost(discount: number): number {
        return (this.cost() - discount);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}