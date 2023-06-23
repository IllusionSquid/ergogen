module.exports = {
    nets: {
      SDA: undefined,
      SCL: undefined,
      VCC: 'VCC',
      GND: 'GND'
    },
    params: {
      class: 'OLED',
	    side: 'F'
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value OLED (at 0 7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (pad "" thru_hole oval (at -3.81 1.6 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at -1.27 1.6 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 1.27 1.6 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole oval (at 3.81 1.6 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))

        ${'' /* Outline 128x32 */}
        (fp_line (start -13.05 0.33) (end -13.05 26.53) (layer Dwgs.User) (width 0.15))
        (fp_line (start 13.05 0.33) (end 13.05 26.53) (layer Dwgs.User) (width 0.15))
        (fp_line (start -13.05 26.53) (end 13.05 26.53) (layer Dwgs.User) (width 0.15))
        (fp_line (start -13.05 0.33) (end 13.05 0.33) (layer Dwgs.User) (width 0.15))

        ${'' /* Outline 128x64 */}
        (fp_line (start -6.05 0.33) (end -6.05 39.43) (layer Dwgs.User) (width 0.15))
        (fp_line (start 6.05 0.33) (end 6.05 39.43) (layer Dwgs.User) (width 0.15))
        (fp_line (start -6.05 39.43) (end 6.05 39.43) (layer Dwgs.User) (width 0.15))
        (fp_line (start -6.05 0.33) (end 6.05 0.33) (layer Dwgs.User) (width 0.15))

        ${'' /* socket silks */}
        (fp_line (start 5.08 0.33) (end 5.08 2.87) (layer F.SilkS) (width 0.15))
        (fp_line (start -5.08 0.33) (end -5.08 2.87) (layer F.SilkS) (width 0.15))
        (fp_line (start -5.08 2.87) (end 5.08 2.87) (layer F.SilkS) (width 0.15))
        (fp_line (start -5.08 0.33) (end 5.08 0.33) (layer F.SilkS) (width 0.15))
        
        
        ${'' /* front jumpers */}
        (pad "" smd custom (at -3.81 2.875 ${p.rot}) (size 0.25 1.5) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at -3.81 3.875 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 4 smd custom (at -3.81 4.891 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at -1.27 2.875 ${p.rot}) (size 0.25 1.5) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at -1.27 3.875 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 3 smd custom (at -1.27 4.891 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.VCC.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at 1.27 2.875 ${p.rot}) (size 0.25 1.5) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at 1.27 3.875 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 2 smd custom (at 1.27 4.891 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.SCL.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at 3.81 2.875 ${p.rot}) (size 0.25 1.5) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at 3.81 3.875 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 1 smd custom (at 3.81 4.891 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.SDA.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        ${'' /* back jumpers */}
        (pad "" smd custom (at -3.81 2.875 ${p.rot}) (size 0.25 1.5) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at -3.81 3.875 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 1 smd custom (at -3.81 4.891 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.SDA.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at -1.27 2.875 ${p.rot}) (size 0.25 1.5) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at -1.27 3.875 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 2 smd custom (at -1.27 4.891 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.SCL.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at 1.27 2.875 ${p.rot}) (size 0.25 1.5) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at 1.27 3.875 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 3 smd custom (at 1.27 4.891 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.VCC.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )

        (pad "" smd custom (at 3.81 2.875 ${p.rot}) (size 0.25 1.5) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives)
        )
        (pad "" smd custom (at 3.81 3.875 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
              ) 
              (width 0)
            )
          )
        )
        (pad 4 smd custom (at 3.81 4.891 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
          (clearance 0) (zone_connect 1)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly 
              (pts
                (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
              ) 
              (width 0)
            )
          )
        )


        (pad 4 thru_hole circle (at -3.81 5.891) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.GND.str})
        (pad 3 thru_hole circle (at -1.27 5.891) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.VCC.str})
        (pad 2 thru_hole circle (at 1.27 5.891) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.SCL.str})
        (pad 1 thru_hole circle (at 3.81 5.891) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.SDA.str})
      
      )
        `
}