/* eslint-disable react/prop-types */
import Zoomable from '../Zoomable'
import pullStock from '../../assets/amolog-pull-stock.png'
import inventory from '../../assets/amolog-inventory.png'
import activity from '../../assets/amolog-activity.png'
import orderPlanning from '../../assets/amolog-order-planning.png'
import reports from '../../assets/amolog-reports.png'
import inventoryReport from '../../assets/amolog-inventory-report.png'
import admin from '../../assets/amolog-admin.png'

function Shot({ src, alt, children }) {
  return (
    <Zoomable caption={children}>
      <img src={src} alt={alt} loading="lazy" />
    </Zoomable>
  )
}

export default function AmologAnswer() {
  return (
    <div className="answer">
      <p className="meta">{'// react / typescript / convex / clerk / square / stripe / posthog'}</p>

      <p>
        I built <strong>Amolog</strong> as a full-stack operations app for gelato stores. It tracks
        the work employees actually do every day: pulling pans from walk-in storage to display,
        adjusting inventory, logging deliveries, recording disposals, planning orders, and producing
        reports managers can trust.
      </p>

      <p>
        The coolest part is the inventory and planning layer. Amolog understands product types,
        variants, liters, lots, current stock, daily consumption, seasonality, open purchase orders,
        and pallet constraints, then turns that into a workflow a real store can use without living
        in spreadsheets.
      </p>

      <h4>Inventory and planning</h4>
      <div className="media-grid">
        <Shot src={inventory} alt="Amolog inventory management">
          <span className="accent">Inventory management</span> is built around how gelato is actually
          counted: product type, flavor, variant, pan count, and liter equivalents in one fast editing
          surface.
        </Shot>
        <Shot src={orderPlanning} alt="Amolog order planning">
          <span className="accent">Order planning</span> combines current stock, daily consumption,
          seasonality, open purchase orders, liter totals, and pallet minimums to recommend what to
          order next.
        </Shot>
        <Shot src={inventoryReport} alt="Amolog inventory report">
          <span className="accent">Inventory reports</span> can show stock by product type, include
          lot details and codes, group rows, and export CSV/PDF for store reviews.
        </Shot>
      </div>

      <h4>Daily store operations</h4>
      <div className="media-grid">
        <Shot src={pullStock} alt="Amolog pull stock workflow">
          <span className="accent">Pull Stock</span> is the floor workflow staff use constantly:
          account number, product type, flavor, lot number, pan size, quantity, notes, and submit.
        </Shot>
        <Shot src={activity} alt="Amolog recent activity">
          <span className="accent">Activity history</span> turns pulls, deliveries, and disposals
          into an audit trail with quantities, lots, account numbers, and product tags.
        </Shot>
        <Shot src={reports} alt="Amolog reports index">
          <span className="accent">Reports</span> cover inventory, delivery, disposal, pull history,
          and Square sales reporting without forcing managers to stitch together raw tables.
        </Shot>
      </div>

      <h4>What made it interesting</h4>
      <ul>
        <li>
          Modeled inventory beyond a single SKU count: product type catalogs, per-store flavors,
          variants like 3L/5L pans or trays, lot numbers, liter equivalents, and stage movement.
        </li>
        <li>
          Built order planning around operational constraints: consumption rates, seasonality,
          coverage windows, open POs, storage capacity, liters per pallet, and minimum pallet counts.
        </li>
        <li>
          Integrated Square sales data for category, item, individual-sale, and compare-store
          reports without mixing POS access into operational store access.
        </li>
        <li>
          Added offline-aware operations so store staff can keep logging pulls and disposals when the
          network is unreliable, then sync queued work later.
        </li>
      </ul>

      <details>
        <summary>Admin and platform layer</summary>
        <p>
          Amolog also has store management, custom roles, per-store permission overrides, role
          simulation, invitations, subscriptions, product type catalogs, and Square report access.
        </p>
        <Shot src={admin} alt="Amolog admin tools">
          <span className="accent">Admin tools</span> support the platform, but the main story is the
          inventory and ordering workflow store teams use every week.
        </Shot>
      </details>

      <div className="tags">
        {['React', 'TypeScript', 'Convex', 'Clerk', 'Square', 'Stripe', 'PostHog', 'Offline sync', 'RBAC', 'Vitest'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
